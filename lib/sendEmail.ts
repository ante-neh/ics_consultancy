export const sendEmail = async (formData: FormData) => {
    const data = {
      userName: formData.get("user_name") as string,
      userEmail: formData.get("user_email") as string,
      userMessage: formData.get("message") as string,
    };
  
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return { success: true, message: result };
      } else {
        return { success: false, message: result.error || "Unknown error" };
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "An unexpected error occurred. Please try again." };
    }
  };
  