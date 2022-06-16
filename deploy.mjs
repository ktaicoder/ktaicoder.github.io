import deployAction from "@jamesives/github-pages-deploy-action";
const run = deployAction.default;

/**
 * github 배포가 시간이 너무 오래 걸린다.
 * 그래서 직접 빌드하고, 배포한다.
 * 배포하려면 root/out 폴더의 내용을 gh-pages 브랜치에 복사해야 하는데
 * jamesives의 라이브러리를 이용해서 브랜치에 배포한다.
 *
 * @example
 * $ ACCESS_TOKEN=xxx node deploy.mjs
 */
run({
  token: process.env["ACCESS_TOKEN"],
  branch: "gh-pages",
  hostname: "github.com",
  folder: "root/out",
  repositoryName: "ktaicoder/ktaicoder.github.io",
  silent: false,
  workspace: ".",
});
