function importAll(r) {
  let routes = [];
  r.keys().forEach((key, index) => {
      const src = r(key);
      let content = null;
      switch (index) {
          case 2:
              content = {
                  label: "App Customization",
                  routes: ["App Builder", "App Customizer", "A/B Testing"]
              };
              break;
          case 3:
              content = {
                  label: "Store Management",
                  routes: ["Content Management", "Product Management", "Product Referral", "Shops Management"]
              };
              break;
          case 4:
              content = {
                  label: "User Management",
                  routes: ["Employee Management", "Customer Management", "Partner Management"]
              };
              break;
          case 5:
              content = {
                  label: "Communication",
                  routes: ["Chat", "Notifications"]
              };
              break;
          default:
              break;
      }
      routes.push({ src, content });
  });
  return routes;
}

const routes = importAll(require.context('../assets/images/icons/nav', false, /\.(png|jpe?g|svg)$/));

export default routes;
