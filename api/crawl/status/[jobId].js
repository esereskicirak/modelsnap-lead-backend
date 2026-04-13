export default function handler(req, res) {
  const { jobId } = req.query;

  global.jobs = global.jobs || {};
  const job = global.jobs[jobId];

  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }

  // progress arttır
  job.progress += 25;

  if (job.progress >= 100) {
    job.progress = 100;
    job.status = "completed";
  }

  return res.status(200).json({
    jobId,
    status: job.status,
    progress: job.progress,
    totalFound: job.progress >= 100 ? 5 : 1,
  });
}
