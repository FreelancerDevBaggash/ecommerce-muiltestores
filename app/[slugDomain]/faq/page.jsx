import FAQCenter from '../../../components/frontend/template2/faq/FAQCenter';

export default function FAQPage({ params }) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <FAQCenter slugDomain={params.slugDomain} />
      </div>
    );
  }