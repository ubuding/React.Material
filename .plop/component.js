module.exports = {
  description: "创建组件",
  prompts: [
    {
      type: "input",
      name: "code",
      message: "Please enter a component name(like: image)\n",
      validate: (_) => {
        if (_) return true;
        return "Please enter a component name!";
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/U{{pascalCase code}}/index.tsx",
      templateFile: "./.plop/templates/component/index.hbs",
    },
  ],
};
