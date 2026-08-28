export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

// TODO: ganti dengan testimoni asli dari tenant (BIMA/Zee/ABI)
export const testimonials: Testimonial[] = [
  {
    name: 'BIMA NET',
    role: 'Operator RT/RW Net — Bekasi',
    quote: 'Sejak pakai Velonix, billing otomatis dan pelanggan tidak perlu lagi datang ke loket. Hemat waktu berhari-hari.',
  },
  {
    name: 'Zee Net',
    role: 'ISP Mikro — Bekasi',
    quote: 'Monitoring OLT jadi mudah. Kalau ada gangguan, kami tahu sebelum pelanggan komplain.',
  },
  {
    name: 'ABI NET',
    role: 'Warnet & RT/RW Net',
    quote: 'Isolir pelanggan nunggak jadi otomatis. Tidak ada lagi debt yang numpuk.',
  },
];
