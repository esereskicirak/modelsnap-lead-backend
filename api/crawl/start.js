export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const jobId = "job_" + Date.now();

  // basit mock başlangıç
  global.jobs = global.jobs || {};
  global.jobs[jobId] = {
    progress: 0,
    status: "running",
    createdAt: Date.now(),
  };

  return res.status(200).json({ jobId });
}
