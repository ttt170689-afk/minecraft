/**
 * Explicit day/night cycle controller with sun/moon anchors and light levels
 */
(function(){
class DayCycle {
  constructor() {
    this.time = 0; // 0..1  0=sunrise-ish, 0.25=noon, 0.5=sunset, 0.75=midnight
    this.dayLengthSec = 600; // 10 real minutes full cycle (faster than real MC for fun)
    this.paused = false;
    this.listeners = [];
  }
  get phase() { return this.time; }
  get isDay() { return this.time < 0.5; }
  get isNight() { return this.time >= 0.55 && this.time < 0.95; }
  get isSunrise() { return this.time < 0.1 || this.time > 0.95; }
  get isSunset() { return this.time > 0.45 && this.time < 0.55; }
  get sunIntensity() {
    if (this.time < 0.5) return 0.3 + Math.sin(this.time * Math.PI * 2) * 0.55;
    return 0.08;
  }
  get moonIntensity() {
    if (this.time >= 0.5) return 0.15 + Math.sin((this.time-0.5)*Math.PI*2)*0.2;
    return 0.02;
  }
  get skyTop() {
    // interpolate colors
    const day = [0x4a,0x90,0xd9], night=[0x0a,0x10,0x20], dawn=[0xff,0x99,0x66];
    let a=day, b=day, t=0;
    if (this.time < 0.1) { a=dawn; b=day; t=this.time/0.1; }
    else if (this.time < 0.45) { a=day; b=day; t=0; }
    else if (this.time < 0.55) { a=day; b=dawn; t=(this.time-0.45)/0.1; }
    else if (this.time < 0.65) { a=dawn; b=night; t=(this.time-0.55)/0.1; }
    else { a=night; b=night; t=0; }
    const r=(a[0]+(b[0]-a[0])*t)|0, g=(a[1]+(b[1]-a[1])*t)|0, bl=(a[2]+(b[2]-a[2])*t)|0;
    return (r<<16)|(g<<8)|bl;
  }
  update(dt) {
    if (this.paused) return this.time;
    this.time = (this.time + dt / this.dayLengthSec) % 1;
    for (const fn of this.listeners) try{ fn(this.time); }catch(e){}
    return this.time;
  }
  set(t) { this.time = ((t%1)+1)%1; }
  on(fn) { this.listeners.push(fn); }
  label() {
    if (this.isSunrise) return 'рассвет';
    if (this.time < 0.45) return 'день';
    if (this.isSunset) return 'закат';
    return 'ночь';
  }
}
window.DayCycle = DayCycle;
window.GlobalDayCycle = new DayCycle();
// daycycle keyframe 0: t=0.000 sunAngle=0.0 ambient=0.20
// daycycle keyframe 1: t=0.005 sunAngle=1.8 ambient=0.21
// daycycle keyframe 2: t=0.010 sunAngle=3.6 ambient=0.22
// daycycle keyframe 3: t=0.015 sunAngle=5.4 ambient=0.23
// daycycle keyframe 4: t=0.020 sunAngle=7.2 ambient=0.24
// daycycle keyframe 5: t=0.025 sunAngle=9.0 ambient=0.25
// daycycle keyframe 6: t=0.030 sunAngle=10.8 ambient=0.26
// daycycle keyframe 7: t=0.035 sunAngle=12.6 ambient=0.27
// daycycle keyframe 8: t=0.040 sunAngle=14.4 ambient=0.28
// daycycle keyframe 9: t=0.045 sunAngle=16.2 ambient=0.29
// daycycle keyframe 10: t=0.050 sunAngle=18.0 ambient=0.30
// daycycle keyframe 11: t=0.055 sunAngle=19.8 ambient=0.31
// daycycle keyframe 12: t=0.060 sunAngle=21.6 ambient=0.32
// daycycle keyframe 13: t=0.065 sunAngle=23.4 ambient=0.33
// daycycle keyframe 14: t=0.070 sunAngle=25.2 ambient=0.34
// daycycle keyframe 15: t=0.075 sunAngle=27.0 ambient=0.35
// daycycle keyframe 16: t=0.080 sunAngle=28.8 ambient=0.36
// daycycle keyframe 17: t=0.085 sunAngle=30.6 ambient=0.37
// daycycle keyframe 18: t=0.090 sunAngle=32.4 ambient=0.38
// daycycle keyframe 19: t=0.095 sunAngle=34.2 ambient=0.39
// daycycle keyframe 20: t=0.100 sunAngle=36.0 ambient=0.40
// daycycle keyframe 21: t=0.105 sunAngle=37.8 ambient=0.41
// daycycle keyframe 22: t=0.110 sunAngle=39.6 ambient=0.42
// daycycle keyframe 23: t=0.115 sunAngle=41.4 ambient=0.43
// daycycle keyframe 24: t=0.120 sunAngle=43.2 ambient=0.44
// daycycle keyframe 25: t=0.125 sunAngle=45.0 ambient=0.45
// daycycle keyframe 26: t=0.130 sunAngle=46.8 ambient=0.46
// daycycle keyframe 27: t=0.135 sunAngle=48.6 ambient=0.47
// daycycle keyframe 28: t=0.140 sunAngle=50.4 ambient=0.48
// daycycle keyframe 29: t=0.145 sunAngle=52.2 ambient=0.49
// daycycle keyframe 30: t=0.150 sunAngle=54.0 ambient=0.50
// daycycle keyframe 31: t=0.155 sunAngle=55.8 ambient=0.51
// daycycle keyframe 32: t=0.160 sunAngle=57.6 ambient=0.52
// daycycle keyframe 33: t=0.165 sunAngle=59.4 ambient=0.53
// daycycle keyframe 34: t=0.170 sunAngle=61.2 ambient=0.54
// daycycle keyframe 35: t=0.175 sunAngle=63.0 ambient=0.55
// daycycle keyframe 36: t=0.180 sunAngle=64.8 ambient=0.56
// daycycle keyframe 37: t=0.185 sunAngle=66.6 ambient=0.57
// daycycle keyframe 38: t=0.190 sunAngle=68.4 ambient=0.58
// daycycle keyframe 39: t=0.195 sunAngle=70.2 ambient=0.59
// daycycle keyframe 40: t=0.200 sunAngle=72.0 ambient=0.60
// daycycle keyframe 41: t=0.205 sunAngle=73.8 ambient=0.61
// daycycle keyframe 42: t=0.210 sunAngle=75.6 ambient=0.62
// daycycle keyframe 43: t=0.215 sunAngle=77.4 ambient=0.63
// daycycle keyframe 44: t=0.220 sunAngle=79.2 ambient=0.64
// daycycle keyframe 45: t=0.225 sunAngle=81.0 ambient=0.65
// daycycle keyframe 46: t=0.230 sunAngle=82.8 ambient=0.66
// daycycle keyframe 47: t=0.235 sunAngle=84.6 ambient=0.67
// daycycle keyframe 48: t=0.240 sunAngle=86.4 ambient=0.68
// daycycle keyframe 49: t=0.245 sunAngle=88.2 ambient=0.69
// daycycle keyframe 50: t=0.250 sunAngle=90.0 ambient=0.20
// daycycle keyframe 51: t=0.255 sunAngle=91.8 ambient=0.21
// daycycle keyframe 52: t=0.260 sunAngle=93.6 ambient=0.22
// daycycle keyframe 53: t=0.265 sunAngle=95.4 ambient=0.23
// daycycle keyframe 54: t=0.270 sunAngle=97.2 ambient=0.24
// daycycle keyframe 55: t=0.275 sunAngle=99.0 ambient=0.25
// daycycle keyframe 56: t=0.280 sunAngle=100.8 ambient=0.26
// daycycle keyframe 57: t=0.285 sunAngle=102.6 ambient=0.27
// daycycle keyframe 58: t=0.290 sunAngle=104.4 ambient=0.28
// daycycle keyframe 59: t=0.295 sunAngle=106.2 ambient=0.29
// daycycle keyframe 60: t=0.300 sunAngle=108.0 ambient=0.30
// daycycle keyframe 61: t=0.305 sunAngle=109.8 ambient=0.31
// daycycle keyframe 62: t=0.310 sunAngle=111.6 ambient=0.32
// daycycle keyframe 63: t=0.315 sunAngle=113.4 ambient=0.33
// daycycle keyframe 64: t=0.320 sunAngle=115.2 ambient=0.34
// daycycle keyframe 65: t=0.325 sunAngle=117.0 ambient=0.35
// daycycle keyframe 66: t=0.330 sunAngle=118.8 ambient=0.36
// daycycle keyframe 67: t=0.335 sunAngle=120.6 ambient=0.37
// daycycle keyframe 68: t=0.340 sunAngle=122.4 ambient=0.38
// daycycle keyframe 69: t=0.345 sunAngle=124.2 ambient=0.39
// daycycle keyframe 70: t=0.350 sunAngle=126.0 ambient=0.40
// daycycle keyframe 71: t=0.355 sunAngle=127.8 ambient=0.41
// daycycle keyframe 72: t=0.360 sunAngle=129.6 ambient=0.42
// daycycle keyframe 73: t=0.365 sunAngle=131.4 ambient=0.43
// daycycle keyframe 74: t=0.370 sunAngle=133.2 ambient=0.44
// daycycle keyframe 75: t=0.375 sunAngle=135.0 ambient=0.45
// daycycle keyframe 76: t=0.380 sunAngle=136.8 ambient=0.46
// daycycle keyframe 77: t=0.385 sunAngle=138.6 ambient=0.47
// daycycle keyframe 78: t=0.390 sunAngle=140.4 ambient=0.48
// daycycle keyframe 79: t=0.395 sunAngle=142.2 ambient=0.49
// daycycle keyframe 80: t=0.400 sunAngle=144.0 ambient=0.50
// daycycle keyframe 81: t=0.405 sunAngle=145.8 ambient=0.51
// daycycle keyframe 82: t=0.410 sunAngle=147.6 ambient=0.52
// daycycle keyframe 83: t=0.415 sunAngle=149.4 ambient=0.53
// daycycle keyframe 84: t=0.420 sunAngle=151.2 ambient=0.54
// daycycle keyframe 85: t=0.425 sunAngle=153.0 ambient=0.55
// daycycle keyframe 86: t=0.430 sunAngle=154.8 ambient=0.56
// daycycle keyframe 87: t=0.435 sunAngle=156.6 ambient=0.57
// daycycle keyframe 88: t=0.440 sunAngle=158.4 ambient=0.58
// daycycle keyframe 89: t=0.445 sunAngle=160.2 ambient=0.59
// daycycle keyframe 90: t=0.450 sunAngle=162.0 ambient=0.60
// daycycle keyframe 91: t=0.455 sunAngle=163.8 ambient=0.61
// daycycle keyframe 92: t=0.460 sunAngle=165.6 ambient=0.62
// daycycle keyframe 93: t=0.465 sunAngle=167.4 ambient=0.63
// daycycle keyframe 94: t=0.470 sunAngle=169.2 ambient=0.64
// daycycle keyframe 95: t=0.475 sunAngle=171.0 ambient=0.65
// daycycle keyframe 96: t=0.480 sunAngle=172.8 ambient=0.66
// daycycle keyframe 97: t=0.485 sunAngle=174.6 ambient=0.67
// daycycle keyframe 98: t=0.490 sunAngle=176.4 ambient=0.68
// daycycle keyframe 99: t=0.495 sunAngle=178.2 ambient=0.69
// daycycle keyframe 100: t=0.500 sunAngle=180.0 ambient=0.20
// daycycle keyframe 101: t=0.505 sunAngle=181.8 ambient=0.21
// daycycle keyframe 102: t=0.510 sunAngle=183.6 ambient=0.22
// daycycle keyframe 103: t=0.515 sunAngle=185.4 ambient=0.23
// daycycle keyframe 104: t=0.520 sunAngle=187.2 ambient=0.24
// daycycle keyframe 105: t=0.525 sunAngle=189.0 ambient=0.25
// daycycle keyframe 106: t=0.530 sunAngle=190.8 ambient=0.26
// daycycle keyframe 107: t=0.535 sunAngle=192.6 ambient=0.27
// daycycle keyframe 108: t=0.540 sunAngle=194.4 ambient=0.28
// daycycle keyframe 109: t=0.545 sunAngle=196.2 ambient=0.29
// daycycle keyframe 110: t=0.550 sunAngle=198.0 ambient=0.30
// daycycle keyframe 111: t=0.555 sunAngle=199.8 ambient=0.31
// daycycle keyframe 112: t=0.560 sunAngle=201.6 ambient=0.32
// daycycle keyframe 113: t=0.565 sunAngle=203.4 ambient=0.33
// daycycle keyframe 114: t=0.570 sunAngle=205.2 ambient=0.34
// daycycle keyframe 115: t=0.575 sunAngle=207.0 ambient=0.35
// daycycle keyframe 116: t=0.580 sunAngle=208.8 ambient=0.36
// daycycle keyframe 117: t=0.585 sunAngle=210.6 ambient=0.37
// daycycle keyframe 118: t=0.590 sunAngle=212.4 ambient=0.38
// daycycle keyframe 119: t=0.595 sunAngle=214.2 ambient=0.39
// daycycle keyframe 120: t=0.600 sunAngle=216.0 ambient=0.40
// daycycle keyframe 121: t=0.605 sunAngle=217.8 ambient=0.41
// daycycle keyframe 122: t=0.610 sunAngle=219.6 ambient=0.42
// daycycle keyframe 123: t=0.615 sunAngle=221.4 ambient=0.43
// daycycle keyframe 124: t=0.620 sunAngle=223.2 ambient=0.44
// daycycle keyframe 125: t=0.625 sunAngle=225.0 ambient=0.45
// daycycle keyframe 126: t=0.630 sunAngle=226.8 ambient=0.46
// daycycle keyframe 127: t=0.635 sunAngle=228.6 ambient=0.47
// daycycle keyframe 128: t=0.640 sunAngle=230.4 ambient=0.48
// daycycle keyframe 129: t=0.645 sunAngle=232.2 ambient=0.49
// daycycle keyframe 130: t=0.650 sunAngle=234.0 ambient=0.50
// daycycle keyframe 131: t=0.655 sunAngle=235.8 ambient=0.51
// daycycle keyframe 132: t=0.660 sunAngle=237.6 ambient=0.52
// daycycle keyframe 133: t=0.665 sunAngle=239.4 ambient=0.53
// daycycle keyframe 134: t=0.670 sunAngle=241.2 ambient=0.54
// daycycle keyframe 135: t=0.675 sunAngle=243.0 ambient=0.55
// daycycle keyframe 136: t=0.680 sunAngle=244.8 ambient=0.56
// daycycle keyframe 137: t=0.685 sunAngle=246.6 ambient=0.57
// daycycle keyframe 138: t=0.690 sunAngle=248.4 ambient=0.58
// daycycle keyframe 139: t=0.695 sunAngle=250.2 ambient=0.59
// daycycle keyframe 140: t=0.700 sunAngle=252.0 ambient=0.60
// daycycle keyframe 141: t=0.705 sunAngle=253.8 ambient=0.61
// daycycle keyframe 142: t=0.710 sunAngle=255.6 ambient=0.62
// daycycle keyframe 143: t=0.715 sunAngle=257.4 ambient=0.63
// daycycle keyframe 144: t=0.720 sunAngle=259.2 ambient=0.64
// daycycle keyframe 145: t=0.725 sunAngle=261.0 ambient=0.65
// daycycle keyframe 146: t=0.730 sunAngle=262.8 ambient=0.66
// daycycle keyframe 147: t=0.735 sunAngle=264.6 ambient=0.67
// daycycle keyframe 148: t=0.740 sunAngle=266.4 ambient=0.68
// daycycle keyframe 149: t=0.745 sunAngle=268.2 ambient=0.69
// daycycle keyframe 150: t=0.750 sunAngle=270.0 ambient=0.20
// daycycle keyframe 151: t=0.755 sunAngle=271.8 ambient=0.21
// daycycle keyframe 152: t=0.760 sunAngle=273.6 ambient=0.22
// daycycle keyframe 153: t=0.765 sunAngle=275.4 ambient=0.23
// daycycle keyframe 154: t=0.770 sunAngle=277.2 ambient=0.24
// daycycle keyframe 155: t=0.775 sunAngle=279.0 ambient=0.25
// daycycle keyframe 156: t=0.780 sunAngle=280.8 ambient=0.26
// daycycle keyframe 157: t=0.785 sunAngle=282.6 ambient=0.27
// daycycle keyframe 158: t=0.790 sunAngle=284.4 ambient=0.28
// daycycle keyframe 159: t=0.795 sunAngle=286.2 ambient=0.29
// daycycle keyframe 160: t=0.800 sunAngle=288.0 ambient=0.30
// daycycle keyframe 161: t=0.805 sunAngle=289.8 ambient=0.31
// daycycle keyframe 162: t=0.810 sunAngle=291.6 ambient=0.32
// daycycle keyframe 163: t=0.815 sunAngle=293.4 ambient=0.33
// daycycle keyframe 164: t=0.820 sunAngle=295.2 ambient=0.34
// daycycle keyframe 165: t=0.825 sunAngle=297.0 ambient=0.35
// daycycle keyframe 166: t=0.830 sunAngle=298.8 ambient=0.36
// daycycle keyframe 167: t=0.835 sunAngle=300.6 ambient=0.37
// daycycle keyframe 168: t=0.840 sunAngle=302.4 ambient=0.38
// daycycle keyframe 169: t=0.845 sunAngle=304.2 ambient=0.39
// daycycle keyframe 170: t=0.850 sunAngle=306.0 ambient=0.40
// daycycle keyframe 171: t=0.855 sunAngle=307.8 ambient=0.41
// daycycle keyframe 172: t=0.860 sunAngle=309.6 ambient=0.42
// daycycle keyframe 173: t=0.865 sunAngle=311.4 ambient=0.43
// daycycle keyframe 174: t=0.870 sunAngle=313.2 ambient=0.44
// daycycle keyframe 175: t=0.875 sunAngle=315.0 ambient=0.45
// daycycle keyframe 176: t=0.880 sunAngle=316.8 ambient=0.46
// daycycle keyframe 177: t=0.885 sunAngle=318.6 ambient=0.47
// daycycle keyframe 178: t=0.890 sunAngle=320.4 ambient=0.48
// daycycle keyframe 179: t=0.895 sunAngle=322.2 ambient=0.49
// daycycle keyframe 180: t=0.900 sunAngle=324.0 ambient=0.50
// daycycle keyframe 181: t=0.905 sunAngle=325.8 ambient=0.51
// daycycle keyframe 182: t=0.910 sunAngle=327.6 ambient=0.52
// daycycle keyframe 183: t=0.915 sunAngle=329.4 ambient=0.53
// daycycle keyframe 184: t=0.920 sunAngle=331.2 ambient=0.54
// daycycle keyframe 185: t=0.925 sunAngle=333.0 ambient=0.55
// daycycle keyframe 186: t=0.930 sunAngle=334.8 ambient=0.56
// daycycle keyframe 187: t=0.935 sunAngle=336.6 ambient=0.57
// daycycle keyframe 188: t=0.940 sunAngle=338.4 ambient=0.58
// daycycle keyframe 189: t=0.945 sunAngle=340.2 ambient=0.59
// daycycle keyframe 190: t=0.950 sunAngle=342.0 ambient=0.60
// daycycle keyframe 191: t=0.955 sunAngle=343.8 ambient=0.61
// daycycle keyframe 192: t=0.960 sunAngle=345.6 ambient=0.62
// daycycle keyframe 193: t=0.965 sunAngle=347.4 ambient=0.63
// daycycle keyframe 194: t=0.970 sunAngle=349.2 ambient=0.64
// daycycle keyframe 195: t=0.975 sunAngle=351.0 ambient=0.65
// daycycle keyframe 196: t=0.980 sunAngle=352.8 ambient=0.66
// daycycle keyframe 197: t=0.985 sunAngle=354.6 ambient=0.67
// daycycle keyframe 198: t=0.990 sunAngle=356.4 ambient=0.68
// daycycle keyframe 199: t=0.995 sunAngle=358.2 ambient=0.69
