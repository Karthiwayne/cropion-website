export interface EmailSubFormData {
    email: string;
  }
  
  export async function emailSub(data: EmailSubFormData) {
    const endpoint = "https://cms.cropion.com/api/mail-subs";
    const payload = {
      data: {
        email: data.email,
      },
    };
  
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("Failed to submit contact form");
    }
    return res.json();
  }
  