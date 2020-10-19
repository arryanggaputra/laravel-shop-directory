setup:
	docker-compose run --rm composer install
	docker-compose run --rm composer copy-env
	docker-compose run --rm yarn install
	docker-compose run --rm php \"file_exists('.env') || copy('.env.example', '.env');\"