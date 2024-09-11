export function getRem(value, multiplier = 16) {
   if (value === "") {
      return "";
   }

   return Math.round((value / multiplier) * 1000) / 1000;
}

export function getPx(value, multiplier = 16) {
   if (value === "") {
      return "";
   }

   return Math.round(value * multiplier * 1000) / 1000;
}
