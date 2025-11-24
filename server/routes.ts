import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("📧 Contact Form Submission:", {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });

      res.json({ 
        success: true, 
        message: "Votre message a été reçu avec succès. Je vous répondrai bientôt." 
      });
    } catch (error) {
      if (error instanceof Error && "errors" in error) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Une erreur s'est produite lors de l'envoi du message" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
