export interface Service {
  slug: string;
  title: string;
  desc: string;
  icon: string; // emoji atau nama ikon
  points: string[];
}

export const services: Service[] = [
  {
    slug: 'saas',
    title: 'Connect — SaaS Infrastruktur',
    desc: 'Platform otomatisasi billing, monitoring, dan isolir untuk operator RT/RW Net & ISP mikro. Kelola ratusan pelanggan dari satu dashboard.',
    icon: 'connect',
    points: [
      'Velonix — Billing & manajemen pelanggan otomatis',
      'Netsight — Monitoring jaringan & OLT real-time',
      'Sync otomatis ke Mikrotik & perangkat jaringan',
      'SLA 99.9% — berjalan di cloud, akses dari mana saja',
    ],
  },
  {
    slug: 'jasa-web',
    title: 'Build — Web & App Custom',
    desc: 'Jasa pembuatan website & digitalisasi UMKM. Dari landing page, toko online, sistem booking, hingga dashboard internal — dibuat custom, cepat, dan terintegrasi pembayaran.',
    icon: 'build',
    points: [
      'Landing page & company profile profesional',
      'Toko online dengan pembayaran QRIS / transfer',
      'Sistem booking & order online (F&B, jasa)',
      'Dashboard internal & automasi bisnis',
    ],
  },
  {
    slug: 'keamanan',
    title: 'Secure — Audit & Hardening',
    desc: 'Layanan audit keamanan siber untuk infrastruktur jaringan & aplikasi. Ditangani oleh tenaga bersertifikat CRTA.',
    icon: 'secure',
    points: [
      'Penetration test web & jaringan',
      'Hardening server & firewall MikroTik',
      'Audit kepatuhan keamanan (basic)',
      'Rekomendasi perbaikan & pendampingan',
    ],
  },
];
