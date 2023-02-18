export function buildSvgLoaders() {
  return { test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: ["@svgr/webpack"] };
}
