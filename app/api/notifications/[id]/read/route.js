import db from '@/lib/db'

export async function PATCH(req, { params }) {
  const { id } = params;

  const updated = await db.notification.update({
    where: { id },
    data: { read: true },
  })

  return Response.json(updated)
}
