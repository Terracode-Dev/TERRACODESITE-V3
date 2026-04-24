import { useNavigate, useSearch } from '@tanstack/react-router';
import { CheckCircle, Download, AlertCircle, Loader2 } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PaymentReceipt } from '../../components/pdfx/PaymentReceipt';
import api from '../../api/axios';

interface TransactionData {
  transaction_id: string;
  order_id: string;
  payment_id: string;
  amount: string;
  currency: string;
  status: string;
  received_at: string;
  method: string;
  status_message: string;
}

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState<any>(null);
  const [transaction, setTransaction] = useState<TransactionData | null>(null);
  const [txLoading, setTxLoading] = useState(true);
  const [txError, setTxError] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve details stored from the review page
    const details = localStorage.getItem('last_payment_details');
    if (details) {
      setCustomerDetails(JSON.parse(details));
    }
  }, []);

  const search = useSearch({ strict: false }) as {
    order_id?: string;
  };

  useEffect(() => {
    const fetchTransaction = async () => {
      const orderId = search.order_id;

      if (!orderId) {
        setTxError('Missing order information.');
        setTxLoading(false);
        return;
      }

      try {
        const response = await api.get('/api/transaction', {
          params: { order_id: orderId },
        });
        if (response.data?.success) {
          setTransaction(response.data.transaction);
        } else {
          setTxError('Could not retrieve transaction details.');
        }
      } catch (err: any) {
        const status = err?.response?.status;
        if (status === 400) setTxError('Invalid transaction request.');
        else if (status === 404) setTxError('Transaction record not found.');
        else setTxError('Failed to load transaction details.');
      } finally {
        setTxLoading(false);
      }
    };

    fetchTransaction();
  }, [search.order_id]);

  // Package name mapping (synchronized with details-view.tsx)
  const packageNames: { [key: string]: string } = {
    starter: "Starter Package",
    professional: "Professional Package",
    business: "Business Package",
    custom: "Custom Package",
  };

  const packageName = packageNames[search.order_id?.toLowerCase() || ""] || "Service Package";

  const displayOrderId = transaction?.order_id ?? search.order_id;
  const displayPaymentId = transaction?.payment_id;
  const displayAmount = transaction?.amount;
  const displayCurrency = transaction?.currency;
  const displayMethod = transaction?.method;
  const displayStatus = transaction?.status;

  return (
    <div className="min-h-screen bg-[#000000] font-lufga flex items-center justify-center relative overflow-hidden px-4 py-10">

      {/* ✅ Responsive Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-20"
      >
        <img
          src="/Logo21.png"
          alt="Terracode Logo"
          className="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 brightness-110"
        />
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl relative z-10 mt-16 md:mt-0"
      >
        <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">

            {/* LEFT */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-10">

              {/* ✅ Smaller mobile, balanced desktop */}
              <div className="relative mb-4 md:mb-6">
                <CheckCircle className="h-8 w-8 md:h-16 md:w-12 text-[#FDA10A]" />
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                Payment <br className="hidden md:block" />
                <span className="text-[#FDA10A]">Successful</span>
              </h1>

              <p className="mt-3 text-xs md:text-sm text-gray-400 max-w-[260px]">
                Your order has been confirmed. Thank you for choosing Terracode!
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-3 flex flex-col justify-center">

              {txLoading ? (
                <div className="flex items-center justify-center gap-3 text-gray-400 py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-[#FDA10A]" />
                  <span className="text-sm">Verifying transaction...</span>
                </div>
              ) : txError ? (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-5">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
                  <p className="text-sm text-red-400">{txError}</p>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <InfoBox label="Order ID" value={displayOrderId} />
                <InfoBox label="Amount Paid" value={formatAmount(displayAmount, displayCurrency)} />
                <InfoBox label="Package Summary" value={packageName} fullWidth />
                <InfoBox label="Transaction ID" value={displayPaymentId} fullWidth />
                {displayMethod && <InfoBox label="Payment Method" value={displayMethod} />}
                {displayStatus && <InfoBox label="Status" value={displayStatus} />}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                <button
                  onClick={() => navigate({ to: '/' })}
                  className="w-full sm:w-auto text-[#FDA10A] hover:text-white py-3 px-6 md:px-8 rounded-full border border-[#FDA10A]/50 hover:bg-[#FDA10A] transition text-xs font-bold uppercase"
                >
                  Go to Site
                </button>

                <PDFDownloadLink
                  document={
                    <PaymentReceipt
                      orderId={displayOrderId}
                      paymentId={displayPaymentId}
                      amount={displayAmount}
                      currency={displayCurrency}
                      customerName={customerDetails ? `${customerDetails.first_name} ${customerDetails.last_name}` : undefined}
                      customerEmail={customerDetails?.email}
                      companyName={customerDetails?.company_name}
                      packageName={packageNames[customerDetails?.items] || packageName}
                      discountCode={customerDetails?.discount_code}
                      note={customerDetails?.note}
                    />
                  }
                  fileName={`terracode payment invoice - ${displayOrderId || 'unknown'}.pdf`}
                >
                  {({ loading }: { loading: boolean }) => (
                    <button
                      className="w-full sm:w-auto flex items-center justify-center gap-2 text-white/60 hover:text-white py-3 px-6 md:px-8 rounded-full border border-white/10 hover:bg-white/5 transition text-xs uppercase"
                      disabled={loading}
                    >
                      <Download className="h-4 w-4" />
                      {loading ? 'Preparing...' : 'Save Receipt'}
                    </button>
                  )}
                </PDFDownloadLink>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

function InfoBox({ label, value, fullWidth = false }: { label: string; value?: string; fullWidth?: boolean }) {
  return (
    <div className={`bg-white/[0.04] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300 ${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
      <span className="block text-[10px] uppercase tracking-[0.15em] text-gray-500 mb-2 font-semibold">{label}</span>
      <span className="block text-lg font-medium text-white/90 truncate">{value ?? '—'}</span>
    </div>
  )
}

function formatAmount(amount?: string, currency?: string) {
  if (!amount) return '—';
  return `${currency ?? 'LKR'} ${amount}`;
}
