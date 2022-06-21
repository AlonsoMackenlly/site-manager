import logging

import docker
from compose.cli.command import project_from_options
from compose.cli.main import TopLevelCommand
from compose.cli.main import get_handler
from compose.cli.docopt_command import DocoptDispatcher
from compose.cli.main import get_filtered_args, get_version_info


def do_compose(args):
    try:
        _, compose_options, command = DocoptDispatcher.get_command_and_options(
            TopLevelCommand,
            get_filtered_args(args),
            {'options_first': True, 'version': get_version_info('compose')})

        project = project_from_options('.', compose_options)
        command_object = TopLevelCommand(project, options=compose_options)

        dispatcher = DocoptDispatcher(
            TopLevelCommand,
            {'options_first': True, 'version': get_version_info('compose')})

        options, handler, command_options = dispatcher.parse(args)

        handler(command_object, command_options)
    except Exception as ex:
        logging.exception(ex)
        return ex


def test():
    client = docker.from_env()
    error = do_compose(args=['-f', 'C:\\Projects\\python\\hands-site-manager\\docker-compose.yml', 'up', 'qwe'])
    error = do_compose(args=['-f', 'C:\\Projects\\python\\hands-site-manager\\docker-compose.yml', 'down', '-v'])
    print(error)
