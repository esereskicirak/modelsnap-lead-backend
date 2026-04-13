export default function handler(req, res) {
  const leads = [
    {
      id: 1,
      company: "Urban Test",
      platform: "Trendyol",
      category: "Tişört",
      issue: "Model yok",
      score: 9,
      phone: "+90 555 111 11 11",
      email: "test@test.com",
      instagram: "@test",
      website: "test.com",
      modelDetected: false,
      status: "Yeni",
    },
    {
      id: 2,
      company: "Demo Brand",
      platform: "Hepsiburada",
      category: "Gömlek",
      issue: "Askıda ürün",
      score: 8,
      phone: "",
      email: "demo@demo.com",
      instagram: "@demo",
      website: "demo.com",
      modelDetected: false,
      status: "Yeni",
    },
  ];

  return res.status(200).json({ items: leads });
}
