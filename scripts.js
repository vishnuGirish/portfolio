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
            details: 'This project used a fine-tuned BERT model to detect harmful or abusive language in customer reviews.'
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
