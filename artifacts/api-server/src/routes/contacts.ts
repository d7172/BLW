import { Router, type IRouter } from "express";
import { CreateContactBody } from "@workspace/api-zod";
import { db, contactsTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/contacts", async (req, res) => {
  const parsed = CreateContactBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid contact submission");
    res.status(400).json({ error: "Invalid contact submission" });
    return;
  }

  try {
    const [contact] = await db
      .insert(contactsTable)
      .values({
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        company: parsed.data.company ?? null,
        email: parsed.data.email,
        phone: parsed.data.phone,
        serviceRequired: parsed.data.serviceRequired,
        message: parsed.data.message,
      })
      .returning();

    res.status(201).json({
      ...contact,
      createdAt: contact.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to store contact submission");
    res.status(500).json({ error: "Failed to store contact submission" });
  }
});

export default router;
