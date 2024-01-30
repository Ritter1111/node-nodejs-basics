const parseEnv = () => {
    const variables = process.env;
    const formattedVariables = Object.keys(variables).map((key) => {
      if (key.startsWith("RSS_")) {
        return `${key}=${variables[key]}`;
      }
    });
    const filtered = formattedVariables.filter((item) => item).join(" ");
    console.log(filtered);
  };
  
  parseEnv();
  