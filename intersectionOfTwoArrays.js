// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  console.log(set1);
  let output = [...set1].filter((x) => set2.has(x));
  console.log(output);
  return output;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));

//F:
// var intersect = function (nums1, nums2) {
//   const intersection = [];
//   const used = new Map();
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       const n1 = nums1[i];
//       const n2 = nums2[j];
//       if (n1 === n2 && !used.get(j)) {
//         used.set(j, true);
//         intersection.push(n1);
//         break;
//       }
//     }
//   }
//   console.log(used);
//   return intersection;
//};
function intersect(nums1, nums2) {
  let finalArr = [];
  const myMap = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const a = nums1[i];
      const b = nums2[j];
      if (a === b && !myMap.get(j)) {
        myMap.set(j, true);
        finalArr.push(a);
        break;
      }
    }
  }
  return finalArr;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
