start:
	npm run start

lint:
	npx eslint "**/*.{ts,tsx}"

dev:
	npm run "build:dev"

prod: 
	npm run "build:prod"

stylelint:
	npx stylelint "**/*.scss"

stylelint-fix:
	npx stylelint "**/*.scss" --fix