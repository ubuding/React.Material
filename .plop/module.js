module.exports = {
  description: "添加模块",
  prompts: [
    {
      type: "input",
      name: "code",
      message: "Please enter a module name(like: system)\n",
      validate: (_) => {
        if (_) return true;
        return "Please enter a module name!";
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/pages/index.tsx",
      templateFile: "./.plop/templates/module/pages/index.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/route.ts",
      templateFile: "./.plop/templates/module/route.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/service.ts",
      templateFile: "./.plop/templates/module/service.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/store.ts",
      templateFile: "./.plop/templates/module/store.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/locales/zh.json",
      templateFile: "./.plop/templates/module/locales/zh.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase code}}/locales/en.json",
      templateFile: "./.plop/templates/module/locales/en.hbs",
    },
  ],
};
