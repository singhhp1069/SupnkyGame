const getRandomColor = () => {
  const r = Math.floor((Math.random() * 200) + 50);
  const g = Math.floor((Math.random() * 200) + 50);
  const b = Math.floor((Math.random() * 200) + 50);
  return `rgb(${r}, ${g}, ${b})`;
}

export { getRandomColor }