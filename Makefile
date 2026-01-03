i:
	npm ci .

install:
	npm i

start:
	npm run start

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

chrmt: 
	npm run chromatic