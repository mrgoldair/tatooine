/**
 * Matrix functions
 */

let m = {
  x: [],
  y: [],
  z: [],
  w: []
}

/**
 * basis vectors in row-major order
 */
const identity = [
  1, 0 ,0 ,0, // x
  0, 1 ,0 ,0, // y
  0, 0 ,1 ,0, // z
  0, 0 ,0 ,1  // w
];

const vec = (x,y,z,w) => [ x,y,z,w ];

const mat = (x,y,z,w) => [ x,y,z,w ];

/**
 * Multiply two 4x4 matrices
 * @param {*} m 
 * @param {*} n 
 */
const mult4 = (m,n) => {
  // Row-major matrices
  let x = [
    (m[0] * n[0] + m[1] * n[4] + m[2] *  n[8] + m[3] * n[12]),
    (m[0] * n[1] + m[1] * n[5] + m[2] *  n[9] + m[3] * n[13]),
    (m[0] * n[2] + m[1] * n[6] + m[2] * n[10] + m[3] * n[14]),
    (m[0] * n[3] + m[1] * n[7] + m[2] * n[11] + m[3] * n[15])
  ];

  let y = [
    (m[4] * n[0] + m[5] * n[4] + m[6] *   n[8] + m[7] * n[12]),
    (m[4] * n[1] + m[5] * n[5] + m[6] *   n[9] + m[7] * n[13]),
    (m[4] * n[2] + m[5] * n[6] + m[6] *  n[10] + m[7] * n[14]),
    (m[4] * n[3] + m[5] * n[7] + m[6] *  n[11] + m[7] * n[15])
  ];

  let z = [
    (m[8] * n[0] + m[9] * n[4] + m[10] *  n[8] + m[11] * n[12]),
    (m[8] * n[1] + m[9] * n[5] + m[10] *  n[9] + m[11] * n[13]),
    (m[8] * n[2] + m[9] * n[6] + m[10] * n[10] + m[11] * n[14]),
    (m[8] * n[3] + m[9] * n[7] + m[10] * n[11] + m[12] * n[15]) 
  ];

  let w = [
    (m[12] * n[0] + m[13] * n[4] + m[14] *  n[8] + m[15] * n[12]),
    (m[12] * n[1] + m[13] * n[5] + m[14] *  n[9] + m[15] * n[13]),
    (m[12] * n[2] + m[13] * n[6] + m[14] * n[10] + m[15] * n[14]),
    (m[12] * n[3] + m[13] * n[7] + m[14] * n[11] + m[15] * n[15])
  ]

  return [
    ...x, ...y, ...z, ...w
  ];
}

/**
 * Return matrix with `w` basis augmented by vector `v`
 * @param {*} matrix 
 * @param {*} v 
 * @returns 
 */
const translate = (matrix, v) => {
  // Copy
  let m = Array.of(...matrix);
  // Update
  m[12] += v[0];
  m[13] += v[1];
  m[14] += v[2];
  m[15] += v[3];

  return m;
}

const rads = degrees => degrees * (Math.PI / 180)

/**
 * Rotate matrix `m` about `z` by angle `theta`
 * @param {*} matrix 
 * @param {*} ø - angle in radians
 * @returns 
 */
const rotateZ = (ø) => {
  return [
     Math.cos(ø), Math.sin(ø), 0, 0,
    -Math.sin(ø), Math.cos(ø), 0, 0,
                   0,       0, 1, 0,
                   0,       0, 0, 1
  ];
}

const rotateX = (theta) => {
  return [
    1,                0,               0, 0,
    0,  Math.cos(theta), Math.sin(theta), 0,
    0, -Math.sin(theta), Math.cos(theta), 0,
    0,                0,               0, 1
  ];
}

/**
 * Return an identity matrix rotated by `theta`
 * @param {*} theta - the angle (in radians) to rotate by
 * @returns 
 */
const rotateY = (theta) => {
  return [
     Math.cos(theta), 0, Math.sin(theta), 0,
                   0, 1,               0, 0,
    -Math.sin(theta), 0, Math.cos(theta), 0,
                   0, 0,               0, 1
  ];
}

export { identity, rads, translate, mult4, rotateX, rotateY, rotateZ };