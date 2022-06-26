## Commands Examples
### build packages
pnpm --filter ./packages/* build

### run apps
pnpm --filter ./apps/* dev

### run client
pnpm --filter @fmind/client run dev

### add packages
pnpm --filter @fmind/client add hogehoge

### add internal packages
pnpm add @fmind/graph --filter @fmind/client
