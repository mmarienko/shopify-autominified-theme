## How to set up this auto-minification and babel transpiler for your theme?

### Follow these steps:
- Step 1: Integrate these changes into your theme: https://github.com/mmarienko/shopify-autominified-theme/commit/eb8544588b21303b3cec52860d054dfacb9fe686
- Step 2: Add new GitHub Secrets for your theme's repository (Settings -> Secrets and variables -> Actions -> New repository secret):
  - `SHOPIFY_CLI_THEME_TOKEN` for Theme Access password ([How to get the password?](https://shopify.dev/docs/themes/tools/theme-access))
  - `SHOPIFY_STORE` for the store URL (e.g., dev-store.myshopify.com)
  - `SHOPIFY_THEME_ID` for the theme ID that you want to minify ([How to find the theme ID?](https://www.howcommerce.com/shopify-theme-id/))
- Step 3: Test the integration by pushing changes to `main` branch (works only with `main` by default)

For more details on the GitHub CI/CD integration, refer to Shopify Developer Documentation: https://shopify.dev/docs/themes/tools/cli/ci-cd
