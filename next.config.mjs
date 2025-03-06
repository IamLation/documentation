import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default async function config() {
  const nextraConfig = await withNextra();

  return {
    ...nextraConfig,
    async redirects() {
      return [
        // Weed Growing
        { source: "/premium-resources/advanced-weed-growing", destination: "/weed-growing/install", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/install-instructions", destination: "/weed-growing/install", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/exports", destination: "/weed-growing/exports", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/custom-props", destination: "/weed-growing/guides/props", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/common-issues", destination: "/weed-growing/common", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/guides/quasar-inventory", destination: "/quasar/inventory", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/guides/project-sloth-inventory", destination: "/sloth/inventory", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/guides/codem-inventory", destination: "/codem/inventory", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/guides/core-inventory", destination: "/core/inventory", permanent: true },
        { source: "/premium-resources/advanced-weed-growing/guides/ox-framework", destination: "/weed-growing/guides/ox_core", permanent: true },

        // Meth Crafting
        { source: "/premium-resources/advanced-meth-crafting", destination: "/meth-crafting/install", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/install-instructions", destination: "/meth-crafting/install", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/exports", destination: "/meth-crafting/exports", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/common-issues", destination: "/meth-crafting/common", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/guides/quasar-inventory", destination: "/quasar/inventory", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/guides/project-sloth-inventory", destination: "/sloth/inventory", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/guides/codem-inventory", destination: "/codem/inventory", permanent: true },
        { source: "/premium-resources/advanced-meth-crafting/guides/ox-framework", destination: "/meth-crafting/guides/ox_core", permanent: true },

        // Chop Shop
        { source: "/premium-resources/advanced-chop-shop", destination: "/chop-shop/install", permanent: true },
        { source: "/premium-resources/advanced-chop-shop/install-instructions", destination: "/chop-shop/install", permanent: true },
        { source: "/premium-resources/advanced-chop-shop/exports", destination: "/chop-shop/exports", permanent: true },
        { source: "/premium-resources/advanced-chop-shop/common-issues", destination: "/chop-shop/common", permanent: true },

        // Money Wash
        { source: "/premium-resources/advanced-money-laundering", destination: "/money-wash/install", permanent: true },
        { source: "/premium-resources/advanced-money-laundering/install-instructions", destination: "/money-wash/install", permanent: true },
        { source: "/premium-resources/advanced-money-laundering/exports", destination: "/money-wash/exports", permanent: true },
        { source: "/premium-resources/advanced-money-laundering/common-issues", destination: "/money-wash/common", permanent: true },

        // Metal Detecting
        { source: "/premium-resources/advanced-metal-detecting", destination: "/metal-detecting/install", permanent: true },
        { source: "/premium-resources/advanced-metal-detecting/install-instructions", destination: "/metal-detecting/install", permanent: true },
        { source: "/premium-resources/advanced-metal-detecting/exports", destination: "/metal-detecting/exports", permanent: true },
        { source: "/premium-resources/advanced-metal-detecting/common-issues", destination: "/metal-detecting/common", permanent: true },

        // Scuba Diving
        { source: "/premium-resources/advanced-scuba-diving", destination: "/scuba-diving/install", permanent: true },
        { source: "/premium-resources/advanced-scuba-diving/install-instructions", destination: "/scuba-diving/install", permanent: true },
        { source: "/premium-resources/advanced-scuba-diving/exports", destination: "/scuba-diving/exports", permanent: true },
        { source: "/premium-resources/advanced-scuba-diving/common-issues", destination: "/scuba-diving/common", permanent: true },

        // Drug Selling
        { source: "/premium-resources/advanced-drug-sales", destination: "/drug-selling/install", permanent: true },
        { source: "/premium-resources/advanced-drug-sales/install-instructions", destination: "/drug-selling/install", permanent: true },
        { source: "/premium-resources/advanced-drug-sales/exports", destination: "/drug-selling/exports", permanent: true },
        { source: "/premium-resources/advanced-drug-sales/common-issues", destination: "/drug-selling/common", permanent: true },
      ];
    },
  };
}