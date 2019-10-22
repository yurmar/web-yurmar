<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'React.YurMar');

// Project repository
set('repository', 'https://github.com/yurmar/web-yurmar.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);


// Hosts

host('95.169.190.28')
    ->user('deployer')
    ->identityFile('~/.ssh/deployerRYkey')
    ->set('deploy_path', '/home/users/yurmar/www/react.yurmar.ru');


// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

