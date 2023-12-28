const logs = [];

export const toggleIcon = (prevIcon, command) => {
  if (prevIcon === 'check') {
    const index = logs.indexOf(command);
    if (index !== -1) {
      logs.splice(index, 1);
    }
  } else {
    logs.push(command);
  }
  return prevIcon === 'plus' ? 'check' : 'plus';
};

export const getLogs = () => logs;
