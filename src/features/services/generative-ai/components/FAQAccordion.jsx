import { useState } from 'react';
import './FAQAccordion.css';

const FAQ_ITEMS = [
    {
        question: 'What is generative AI?',
        answer: `Generative AI technology refers to a type of artificial intelligence (AI) that is capable of creating new content or output that resembles human-created content. This can include images, videos, text, audio, and other types of data.

Generative AI technology uses AI models to analyze existing data and generate new content based on patterns and trends in the data. Generative AI can be used in a variety of applications, including content creation, art, music, and even gaming. It has the potential to revolutionize the way we create and interact with digital content by enabling machines to create content that is indistinguishable from human-created content.`
    },
    {
        question: 'How does generative AI work?',
        answer: `Generative AI uses machine learning algorithms to analyze a dataset and create new content that resembles the original dataset. This is typically done using a generative model, such as a generative adversarial network (GAN), which involves two neural networks (a generator and a discriminator) working together to create and evaluate content.

Once the system has been trained on a dataset, it can be used to create new content by feeding it input and using the generator to create output that matches that input.`
    },
    {
        question: 'What are generative AI capabilities?',
        answer: `Generative AI development makes it possible to create new content, such as images, text, audio, and videos, that resembles human-created content. It can also be used for data augmentation, content creation, art, music, and even gaming.

Additionally, it has the potential to revolutionize the way we create and interact with digital content.`
    },
    {
        question: 'What is the difference between generative AI and analytical AI?',
        answer: `Analytical AI is focused on analyzing data and making predictions or decisions based on that data, while generative AI is focused on creating new data or content that resembles human-created content.

Analytical AI typically uses techniques such as machine learning, deep learning, and natural language processing to analyze data and make predictions, while generative AI uses techniques such as generative models, neural networks, and reinforcement learning to create new content.

In summary, analytical AI is focused on making decisions based on existing data, while generative AI is focused on creating new data or content that resembles human-created content.`
    },
    {
        question: 'What are the risks of generative AI?',
        answer: `Generative AI presents several risks, including:

1. Misuse: Generative AI can be used to create fake content, such as deepfakes, which can be used to spread disinformation, manipulate public opinion, or harm individuals' reputations.

2. Bias and discrimination: The data and algorithms used in generative AI can be biased and discriminatory, leading to unfair or harmful outcomes for certain individuals or groups.

3. Ethical concerns: There are concerns around ownership and control of generative AI content, as well as the potential for generative AI to create content that is inappropriate or offensive.

Overall, it is important to develop policies and regulations to address these risks and ensure that generative AI is used responsibly and ethically.`
    },
    {
        question: 'Does generative AI use deep learning?',
        answer: `Yes, generative AI solutions often uses deep learning techniques, such as deep neural networks, to create new content that resembles human-created content.`
    },
    {
        question: 'Is generative AI the future?',
        answer: `Generative AI has great potential to change the way we create and interact with digital content, but its future will depend on how it is developed, regulated, and adopted.`
    }
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            <div className="faq-header">
                <h2>FAQ about generative AI development company</h2>
            </div>

            <div className="faq-list">
                {FAQ_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                    >
                        <button
                            className="faq-question"
                            onClick={() => toggleItem(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{item.question}</span>
                            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                        </button>
                        <div className="faq-answer">
                            <div className="faq-answer-inner">
                                {item.answer.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
