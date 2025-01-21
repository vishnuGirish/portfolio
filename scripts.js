function openModal(projectId) {
    var modal = document.getElementById('projectModal');
    var modalContent = document.getElementById('modalContent');
    
    var projectDetails = {
        recommendationSystem: {
            title: 'Recommendation System',
            description: 'Developed a robust recommendation system for e-commerce platforms to enhance user experience.',
            details: 'This project used collaborative filtering and content-based filtering techniques to build personalized recommendations.'
        },
        customerChurn: {
            title: 'Customer Churn Modelling',
            description: 'Built predictive models to identify and mitigate customer churn using advanced analytics.',
            details: 'The model was trained on customer interaction data and implemented decision trees for churn prediction.'
        },
        dynamicPricing: {
            title: 'Dynamic Pricing',
            description: 'Implemented dynamic pricing models to optimize product prices based on market demand and trends.',
            details: 'Used machine learning models to analyze sales trends and adjust pricing dynamically.'
        },
        customerGrouping: {
            title: 'Customer Grouping',
            description: 'Used clustering techniques to segment customers based on purchasing behavior.',
            details: 'This project applied unsupervised learning algorithms like K-means for customer segmentation.'
        },
        toxicWordClassification: {
            title: 'Toxic Word Classification (using Transformer model)',
            description: 'Built a model to detect toxic words in user feedback using transformer architecture.',
            details: `
                <p>
                    This project involves creating a text classification pipeline using a pre-trained BERT-based model (unitary/toxic-bert), specifically designed to identify toxic or harmful language in text. The classifier uses the TensorFlow framework to assess whether a given piece of text is considered toxic or not, based on a predefined threshold score. If the score is below the threshold (0.02), the text is classified as "Not Toxic," and if it exceeds the threshold, it is classified as "Toxic." The functionality is encapsulated in the is_toxic function, making it easy to integrate into various applications that need to analyze the sentiment or appropriateness of textual content.
                </p>
                <p>
                    How This Project Can Be Useful in E-commerce:
                    <ul>
                        <li>Customer Reviews Moderation: Automatically flag and filter out harmful reviews to ensure constructive and positive feedback is displayed.</li>
                        <li>User-Generated Content (UGC) Protection: Detect and flag harmful comments to maintain a safe and respectful environment.</li>
                        <li>Chatbot and Customer Support Conversations: Detect toxic language in real-time to address issues promptly or escalate conversations as needed.</li>
                    </ul>
                </p>
                <div style="display: flex; overflow-x: auto;">
                    <img src="images/toxic_word/toxic_word1.png" alt="Demo Image 1" style="width: 100%; margin: 10px; max-width: 300px;">
                    <img src="images/toxic_word/toxicword2.png" alt="Demo Image 2" style="width: 100%; margin: 10px; max-width: 300px;">
                    <img src="images/toxic_word/toxicword3.png" alt="Demo Image 3" style="width: 100%; margin: 10px; max-width: 300px;">
                </div>
            `
        },
        sqlQueryAutomation: {
            title: 'SQL Query Automation (using LLM and Google PaLM)',
            description: 'Automated SQL query generation using large language models and Google PaLM for context-based search.',
            details: 'Leveraged GPT models and PaLM for transforming natural language into optimized SQL queries.'
        },
        customerServiceChatbot: {
            title: 'Customer Service Chatbot (using LLM)',
            description: 'Developed an AI-powered chatbot for automating customer service queries using LLMs.',
            details: 'This project used GPT-3 for generating responses based on customer inquiries.'
        },
        rasaChatbot: {
            title: 'Rasa Chatbot',
            description: 'Built a conversational AI chatbot for customer interaction using Rasa.',
            details: 'Used Rasa framework to build, train, and deploy the chatbot for handling customer queries.'
        },
        ipBlocking: {
            title: 'IP Blocking with CAPTCHA',
            description: 'Developed a security mechanism in Django to prevent unauthorized access using IP blocking and CAPTCHA.',
            details: 'This feature implemented CAPTCHA verification for users trying to access sensitive areas of the platform.'
        },
        fileUploadSecurity: {
            title: 'File Upload Security Detection',
            description: 'Implemented a threat detection system for uploaded files to prevent malicious activities.',
            details: 'Utilized machine learning to analyze uploaded files and detect potential threats or harmful content.'
        },
        fraudDetection: {
            title: 'Fraud Detection Engine',
            description: 'Built a fraud detection system using machine learning to identify fraudulent transactions in real-time.',
            details: 'Trained a model to identify suspicious transactions and flag them for review.'
        },
        anomalyDetection: {
            title: 'Anomaly Detection',
            description: 'Implemented anomaly detection models for identifying unusual patterns in financial transactions.',
            details: 'Used unsupervised learning techniques to detect anomalies in large transaction datasets.'
        },
        imageSearch: {
            title: 'Image Search',
            description: 'Implemented an image search system using deep learning and transfer learning techniques.',
            details: 'Used pre-trained CNN models to extract features from images for search-based recommendations.'
        },
        groceriesFreshness: {
            title: 'Groceries Freshness Classification',
            description: 'Developed a model to classify the freshness of groceries based on images.',
            details: 'This model helps retailers check the quality of perishable items like fruits and vegetables.'
        },
        floorCleanChecking: {
            title: 'Floor Clean Checking',
            description: 'Created an image classification model to check floor cleanliness.',
            details: 'Used deep learning techniques to identify whether floors are clean or need cleaning.'
        },
        imageGeneration: {
            title: 'Image Generation (using OpenAI and Pollination in Flask)',
            description: 'Used OpenAI\'s DALL·E and Pollination API to generate images in Flask applications.',
            details: 'This project leverages the power of AI to create custom images based on textual descriptions.'
        },
        elasticSearch: {
            title: 'Elastic Search with Django',
            description: 'Implemented full-text search optimization in Django applications using Elasticsearch.',
            details: 'Used Elasticsearch to enable fast and scalable searching capabilities in a Django-based application.'
        },
        sidraInfinity: {
            title: 'Backend Development of Sidra Infinity App',
            description: 'Developed the backend of Sidra Infinity, an e-commerce platform, optimizing the performance and scalability.',
            details: 'Worked on scaling the platform to handle high traffic while maintaining fast response times.'
        }
    };

    if (projectDetails[projectId]) {
        var project = projectDetails[projectId];
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p><strong>Details:</strong> ${project.details}</p>
        `;
        modal.style.display = "block";
    }
}

function closeModal() {
    var modal = document.getElementById('projectModal');
    modal.style.display = "none";
}
