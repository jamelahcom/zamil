import anthropic
import dotenv
# pip install anthropic python-dotenv

import os
import base64
from pypdf import PdfReader
#pip install pypdf 

import io

dotenv.load_dotenv()

#The 2 variables that I will take into considerations
hard = False

if hard == True:
    hour = 4
else:
    hour = 3

days_left =  6

# Load API key from environment variable
api_key = os.getenv("ANTHROPIC_API_KEY")
client = anthropic.Client()
anthropic.api_key = api_key

print('WARNING: Do not upload educational content where your phone number,\n' + 
      'social security number or ID, finance information, or any other information is displayed')

def file_to_base64(file):
    return base64.b64encode(open(file, "rb").read()).decode("utf-8")

def pdf_to_text(pdf_file):
    reader = PdfReader(io.BytesIO(pdf_file))
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

# Prompt for explaining content and questions
prompt = """
Create an interactive and attractive React component for a study plan to prepare
for exam in a {days} days, with {hour} hour study sessions each day.
The study plan should:

1. Cover each main topic from the provided document
2. Include a day-by-day breakdown with specific activities for each {hour} hour session.
3. Use React hooks and Tailwind CSS for styling.
4. Implement interactivity:
   - Allow users to mark activities as complete
   - Show progress for each day
   - Update the display when activities are completed
5. Use components from the shadcn/ui library, such as Card, Button, and appropriate icons from lucide-react.
6. Ensure the component is visually appealing and easy to use.
7. Include a brief explanation of how to use the study plan effectively.
8. The component should be a single file including any necessary CSS.

Please provide the complete React component code, including any necessary imports and the default export.
Do not write to me any other response in text, only the code so i can easily extract it

"""

# Message for system
system_message = """
You are an expert teacher and React developer. Your primary role is to assist in explaining the educational content given 
from a PDF file I have personally written, and to create a React component based on this content. Over the past three years, 
I have dedicated myself to this work, and it holds significant value. It's important that the information provided remains confidential and
is used solely for this chat. As the original author, I authorize you to explain and create a React component with the
content provided. The React component should be a single file, including any necessary CSS, and should be dark mode themed.
"""

# Read PDF file
pdf_file_path = "C:/Users/mayoo/OneDrive/Desktop/Eduthon/Claude/Lec10 Knowledge base.pdf"
with open(pdf_file_path, "rb") as pdf_file:
    pdf_content = pdf_file.read()
    pdf_text = pdf_to_text(pdf_content)

message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=4000,  # Increased to accommodate larger React component
    temperature=0.3,
    messages=[
        #{
        #   "role": "system",
        #  "content": system_message
        #},
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": f"{prompt}\n\nHere's the content of the PDF:\n{pdf_text}"
                }
            ]
        }
    ]
)

react_component = message.content[0].text

# Save the React component to a file
with open("MySchedule.js", "w", encoding="utf-8") as f:
    f.write(react_component)

print("React component has been generated and saved as MySchedule.js")
