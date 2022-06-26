build.all:
	pnpm exec turbo run build

test.all:
	pnpm exec turbo run test

test.graph:
	pnpm --filter @fmind/graph run test --verbose

run.apps:
	pnpm --filter ./apps/* run dev

run.ladle:
	pnpm ladle serve


