export interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  message?: string;
  source?: string;
}

export async function submitContactForm(data: ContactFormData) {
  const endpoint = "https://cms.cropion.com/api/contact-uses";
  const payload = {
    data: {
      name: data.fullName,
      email: data.email,
      phone: data.phoneNumber,
      feedback: data.message,
      // source: data.source,
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

