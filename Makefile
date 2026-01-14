install:
	npm ci .

start:
	npm run start

server:
	npm run start:dev:server

test:
	npm run unit

lint:
	npm run lint:ts

lint-fix:
	npm run lint:ts:fix

dev:
	npm run "build:dev"

prod: 
	npm run "build:prod"

stylelint:
	npm run lint:scss

stylelint-fix:
	npm run lint:scss:fix

sb:
	npm run storybook

chrom: 
	npm run chromatic