## Bugs
<img width="567" height="721" alt="image" src="https://github.com/user-attachments/assets/587e109f-88ab-4451-bbcd-cd8dac2adaed" />
*When Discount is Set to 100% the request fails*



<img width="562" height="768" alt="image" src="https://github.com/user-attachments/assets/2b1c836b-99f4-48a5-818c-bcc2fb16ef6c" />
*When Discount is > 100% the discount applies a negative value of the remaining value*


## Workflow

N8N setup to take form submission and create an issue based on bugs to the github respository
<img width="1299" height="610" alt="image" src="https://github.com/user-attachments/assets/32d97754-cf2c-4e85-8a98-26fb4f723b09" />

**Submission Form**

<img width="632" height="595" alt="image" src="https://github.com/user-attachments/assets/87c3b693-3d48-4801-8eb1-baa46c084a2c" />


**Workflow Running**


<img width="1201" height="698" alt="image" src="https://github.com/user-attachments/assets/9b5fe787-59d0-4d25-9a89-9ef6c9db99b1" />
*Response goes through Gemini and a structured output parser*

<img width="1890" height="729" alt="image" src="https://github.com/user-attachments/assets/184ea573-fc1b-4669-899b-454c2fe555b5" />
*A node in n8n creates an issue automatically in the github repo*

<img width="1812" height="777" alt="image" src="https://github.com/user-attachments/assets/b0bad72a-e3c6-4402-b190-f0d939c47d8f" />
*Issue created in github*


**IDE Agent using Copilot fixing the issue and preparing a commit after running tests**
<img width="1194" height="688" alt="image" src="https://github.com/user-attachments/assets/ed43b93a-6e43-4854-b68d-b68a56d9e032" />
<img width="894" height="562" alt="image" src="https://github.com/user-attachments/assets/ae46664c-e4e8-4166-92f8-c41f5631618b" />

**Merging**
<img width="1659" height="778" alt="image" src="https://github.com/user-attachments/assets/66d39abe-13c2-4633-8592-b71b9904cbb1" />


## FINAL RESULT

**BUG 1**
<img width="629" height="732" alt="image" src="https://github.com/user-attachments/assets/7282b464-17c4-4ff2-9412-ccbae9a607b3" />

**BUG 2**
<img width="550" height="767" alt="image" src="https://github.com/user-attachments/assets/3b9951fe-c9b5-4441-8c35-8a07ddbde2c4" />









