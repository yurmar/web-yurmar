<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'React.YurMar');

// Project repository
set('repository', 'https://github.com/yurmar/web-yurmar.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

set('composer_options', 'install --verbose --prefer-dist --no-progress --no-interaction --optimize-autoloader');

// Shared files/dirs between deploys
add('shared_files', [
    '.env'
]);
add('shared_dirs', [
    'storage'
]);

// Writable dirs by web server
add('writable_dirs', [
    'bootstrap/cache',
    'storage',
    'storage/app',
    'storage/app/public',
    'storage/framework',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
]);


// Hosts
host('95.169.190.28')
    ->user('deployer')
    ->identityFile('~/.ssh/deployerRYkey')
    ->set('deploy_path', '/home/users/yurmar/www/react.yurmar.ru');


// Tasks

//desc('Restart PHP-FPM service');
//task('php-fpm:restart', function () {
//    // The user must have rights for restart service
//    // /etc/sudoers: username ALL=NOPASSWD:/bin/systemctl restart php-fpm.service
//    run('sudo systemctl restart php7.2-fpm.service');
//});
//after('deploy:symlink', 'php-fpm:restart');


task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

//before('deploy:symlink', 'artisan:migrate');

task('upload:env', function () {
    upload('.env', '{{deploy_path}}/shared/.env');
})->desc('Environment setup');

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'upload:env',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'artisan:storage:link',
    'artisan:view:clear',
    'artisan:cache:clear',
    'artisan:config:cache',
    //'artisan:migrate',
    'deploy:symlink',
//    'php-fpm:restart',
    'deploy:unlock',
    'cleanup',
]);
