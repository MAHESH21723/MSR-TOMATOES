// MSR Tomatoes: 3D hero (Three.js). A procedural glossy tomato with calyx and stem, two companions and drifting leaves.
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.getElementById("tomato3d");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function webglOK() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); }
  catch (e) { return false; }
}

if (canvas && webglOK()) init();

function init() {
  const mobile = window.matchMedia("(max-width: 880px)").matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.75 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.2, 9);

  // lights: warm key, red rim, soft fill
  scene.add(new THREE.HemisphereLight(0xfff1e0, 0x3a1208, 0.7));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.6); key.position.set(-4, 5, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff6a3d, 2.2); rim.position.set(5, 2, -4); scene.add(rim);
  const fill = new THREE.PointLight(0xffc9a0, 18, 20); fill.position.set(2, -2, 5); scene.add(fill);

  // ---------------------------------------------------------------- materials
  const skin = new THREE.MeshPhysicalMaterial({
    vertexColors: true, roughness: 0.26, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12,
    sheen: 0.25, sheenColor: new THREE.Color(0xff8a6a), sheenRoughness: 0.6
  });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f8f3a, roughness: 0.55, side: THREE.DoubleSide });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x3d7a2c, roughness: 0.7 });

  // ---------------------------------------------------------------- geometry
  function tomatoGeometry(seg, lobes, seed) {
    const g = new THREE.SphereGeometry(1, seg, Math.round(seg * 0.75));
    const pos = g.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const v = new THREE.Vector3();
    const deep = new THREE.Color(0xb3130a), bright = new THREE.Color(0xf0321f), shoulder = new THREE.Color(0xf26a1b), c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const y = v.y;
      const phi = Math.atan2(v.z, v.x);
      const ring = 1 - y * y;                                     // 0 at poles, 1 at equator
      let r = 1 + 0.05 * Math.cos(lobes * phi + seed) * ring + 0.015 * Math.cos(lobes * 2 * phi) * ring;
      let ny = y * 0.8;                                            // squashed like a real tomato
      if (y > 0.72) ny -= 0.16 * Math.pow((y - 0.72) / 0.28, 2);   // stem dimple
      if (y < -0.85) ny += 0.05 * ((-y - 0.85) / 0.15);            // flatter base
      v.set(v.x * r, ny, v.z * r);
      pos.setXYZ(i, v.x, v.y, v.z);
      // colour: deep red base, brighter belly, a warm orange tint around the shoulders
      const n = 0.5 + 0.5 * Math.sin(phi * 3 + y * 5 + seed * 2);
      c.copy(deep).lerp(bright, 0.55 + 0.35 * ring * n);
      if (y > 0.45) c.lerp(shoulder, Math.min(1, (y - 0.45) / 0.45) * 0.35);
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    return g;
  }

  // a single sepal: tapered blade that curls down over the top of the fruit
  function sepalGeometry(len, width) {
    const g = new THREE.PlaneGeometry(width, len, 4, 14);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i);
      const t = (y + len / 2) / len;                // 0 at base, 1 at tip
      const taper = Math.pow(1 - t, 0.8) * (0.6 + 0.4 * Math.sin(Math.PI * Math.min(1, t * 1.6)));
      const curl = t * t * 0.55;                    // bends down
      p.setXYZ(i, x * taper, t * len * 0.95, -curl * len + Math.abs(x) * 0.25);
    }
    g.rotateX(-Math.PI / 2);
    g.computeVertexNormals();
    return g;
  }

  function makeTomato(scale, seg, lobes, seed) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(tomatoGeometry(seg, lobes, seed), skin);
    group.add(body);
    const top = new THREE.Group();
    top.position.y = 0.66;
    const sg = sepalGeometry(0.62, 0.2);
    for (let k = 0; k < 6; k++) {
      const s = new THREE.Mesh(sg, leafMat);
      s.rotation.y = (k / 6) * Math.PI * 2 + seed;
      s.rotation.z = 0.05 * Math.sin(k * 2.3);
      top.add(s);
    }
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.02, 0), new THREE.Vector3(0.02, 0.16, 0.01), new THREE.Vector3(0.09, 0.3, 0.03), new THREE.Vector3(0.2, 0.38, 0.05)
    ]);
    top.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.045, 10, false), stemMat));
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), stemMat);
    cap.position.set(0.2, 0.38, 0.05); top.add(cap);
    group.add(top);
    group.scale.setScalar(scale);
    return group;
  }

  const seg = mobile ? 96 : 160;
  const hero = makeTomato(1.55, seg, 5, 0.3);
  const small1 = makeTomato(0.62, Math.round(seg * 0.6), 4, 1.7);
  const small2 = makeTomato(0.48, Math.round(seg * 0.6), 6, 2.9);
  scene.add(hero, small1, small2);

  // floating leaves
  const leafGeo = sepalGeometry(0.5, 0.22);
  const leaves = [];
  for (let i = 0; i < (mobile ? 7 : 12); i++) {
    const m = new THREE.Mesh(leafGeo, leafMat);
    m.userData = { r: 1.9 + Math.random() * 1.4, a: Math.random() * Math.PI * 2, y: (Math.random() - 0.5) * 4, s: 0.15 + Math.random() * 0.25, spin: (Math.random() - 0.5) * 1.2 };
    m.scale.setScalar(0.6 + Math.random() * 0.7);
    scene.add(m); leaves.push(m);
  }

  // glowing dust
  const dustN = mobile ? 60 : 120;
  const dustPos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) { dustPos[i * 3] = (Math.random() - 0.5) * 12; dustPos[i * 3 + 1] = (Math.random() - 0.5) * 7; dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1; }
  const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
  const dot = document.createElement("canvas"); dot.width = dot.height = 64;
  const dctx = dot.getContext("2d"); const grad = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,210,150,1)"); grad.addColorStop(1, "rgba(255,120,60,0)");
  dctx.fillStyle = grad; dctx.fillRect(0, 0, 64, 64);
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.09, map: new THREE.CanvasTexture(dot), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(dust);

  // ---------------------------------------------------------------- layout
  let anchorX = 2.1, anchorY = 0.1, heroScale = 1;
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w < 880;
    // keep the tomato beside the copy on wide screens and above it on phones
    const visW = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z * camera.aspect;
    const visH = visW / camera.aspect;
    heroScale = narrow ? 0.5 : 1;
    anchorX = narrow ? 0.15 : Math.min(visW * 0.26, 3.4);
    // phones: sit in the band between the nav and the headline
    anchorY = narrow ? visH / 2 - (1.55 * heroScale * 0.85 + 0.75) : 0.15;
  }
  window.addEventListener("resize", resize);
  resize();

  // ---------------------------------------------------------------- interaction
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener("pointermove", (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  let scrollK = 0;
  window.addEventListener("scroll", () => { scrollK = Math.min(1.5, window.scrollY / Math.max(1, window.innerHeight)); }, { passive: true });

  let visible = true;
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(canvas);

  // entrance
  let intro = /[?&]still(?:[&=]|$)/.test(location.search) ? 1 : 0; // ?still skips the entrance (screenshots)
  const clock = new THREE.Clock();

  function frame() {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) { clock.getDelta(); return; }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    intro = Math.min(1, intro + dt * 0.7);
    const ease = 1 - Math.pow(1 - intro, 3);

    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;

    const spin = reduce ? 0 : t * 0.35;
    hero.position.set(anchorX + pointer.x * 0.25, anchorY + Math.sin(t * 1.1) * 0.12 - scrollK * 1.2 + (1 - ease) * -3, 0);
    hero.rotation.set(0.32 + pointer.y * 0.25 + scrollK * 0.6, spin + pointer.x * 0.5 + scrollK * 2.2, 0.12 + Math.sin(t * 0.7) * 0.05);
    hero.scale.setScalar(1.55 * heroScale * (0.6 + 0.4 * ease));

    small1.position.set(anchorX - 1.9 * heroScale + Math.sin(t * 0.8) * 0.1, anchorY - 1.25 * heroScale + Math.cos(t * 1.3) * 0.12 - scrollK * 0.8, 0.9);
    small1.rotation.set(0.5, -spin * 1.3 + 1, 0.3);
    small1.scale.setScalar(0.62 * heroScale * ease);
    small2.position.set(anchorX + 1.75 * heroScale + Math.cos(t * 0.9) * 0.1, anchorY + 1.35 * heroScale + Math.sin(t * 1.2) * 0.1 - scrollK * 1.6, -0.8);
    small2.rotation.set(0.2, spin * 1.6 + 2, -0.25);
    small2.scale.setScalar(0.48 * heroScale * ease);

    leaves.forEach((m) => {
      const u = m.userData;
      const a = u.a + (reduce ? 0 : t * u.s);
      m.position.set(anchorX + Math.cos(a) * u.r * heroScale, anchorY + u.y * heroScale + Math.sin(t * 0.6 + u.a) * 0.3 - scrollK, Math.sin(a) * u.r * 0.6 - 0.5);
      m.rotation.set(t * u.spin, t * u.spin * 0.7 + u.a, 0.4);
    });
    dust.rotation.y = t * 0.03;
    dust.position.y = Math.sin(t * 0.3) * 0.2 - scrollK * 0.5;

    camera.position.x = pointer.x * 0.35;
    camera.position.y = 0.2 - pointer.y * 0.25;
    camera.lookAt(0, 0.1, 0);
    renderer.render(scene, camera);
  }
  frame();
  canvas.classList.add("is-ready");
}
