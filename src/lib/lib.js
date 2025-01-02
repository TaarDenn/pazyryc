export const constrainAndMap = (val, dmin, dmax) => {
  if (val < dmin) return 0;
  if (val > dmax) return 1;

  return (val - dmin) / (dmax - dmin);
};
