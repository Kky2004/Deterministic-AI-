#  Deterministic AI UI Generator  
### Natural Language → Structured UI Plan → React Code → Live Preview

A production-style AI agent that converts plain English UI intent into **deterministic, reproducible React interfaces** using a fixed component system.

Think: AI-powered UI builder that is **safe, debuggable, and explainable**.

---

##  Key Features

-  Describe UI in natural language  
-  Deterministic component system (no hallucinated UI)  
-  Structured UI plan generation  
-  Automatic React code generation  
-  Live preview rendering  
-  AI explanation of design decisions   
-  Version-safe architecture  
-  Full MERN stack implementation  

---

##  System Architecture

The application uses **three specialized AI agents** with strict prompt separation.

###  Planner Agent
Transforms user intent into a structured UI plan.

**Responsibilities**
- Understand user requirements  
- Choose layout structure  
- Select allowed components only  
- Output deterministic JSON  

**Output Example**
```json
{
  "layout": "sidebar-main",
  "components": [
    {
      "id": "navbar1",
      "type": "Navbar",
      "props": { "title": "Admin Dashboard" }
    }
  ]
}
```
### Generator Agent
Converts the plan into working React UI code.

**Rules**
- Uses only allowed components
- Produces valid JSX
- No styling hallucination
- Deterministic output

### Explainer Agent
Explains why each UI decision was made.

**Output includes**
- Layout reasoning
- Component selection logic
- User goal mapping
- Design trade-offs

## Deterministic Component System

### The AI is restricted to a fixed UI library:
- Button
- Card
- Input
- Table
- Model
- Sidebar
- Navbar
- Chart

## Tech Stack
### Frontend
- React (JSX)
- Tailwind CSS
- Vite
- React Markdown

### Backend
- Node.js
- Express

## Example Prompt
Create an admin dashboard with sidebar navigation,
user statistics cards, and a data table.


