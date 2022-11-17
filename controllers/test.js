
exports.getObjectLine = (objectLine) => {

    const object = {};
    objectLine.map((line, i) => {
      switch (i) {
        case 1:
          object.text = line ? line : "";
          break;
        case 2:
          object.number = line ? line : "";
          break;
        case 3:
          object.hex = line ? line : "";
          break;
        default:
          break;
      }
    });

    return object;
  };

