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
    icon: '🛰️',
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
    desc: 'Jasa pembuatan website & aplikasi untuk UMKM dan bisnis jasa. Dari landing page hingga sistem internal dengan integrasi pembayaran.',
    icon: '🛠️',
    points: [
      'Website company profile & landing page',
      'Sistem booking & order online (F&B, jasa)',
      'Integrasi pembayaran (Tripay, Midtrans, QRIS)',
      'Dashboard internal & automasi bisnis',
    ],
  },
  {
    slug: 'keamanan',
    title: 'Secure — Audit & Hardening',
    desc: 'Layanan audit keamanan siber untuk infrastruktur jaringan & aplikasi. Ditangani oleh tenaga bersertifikat CRTA.',
    icon: '🛡️',
    points: [
      'Penetration test web & jaringan',
      'Hardening server & firewall MikroTik',
      'Audit kepatuhan keamanan (basic)',
      'Rekomendasi perbaikan & pendampingan',
    ],
  },
];
