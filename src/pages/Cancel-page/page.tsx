import { useNavigate, useSearch } from '@tanstack/react-router';
import { XCircle, ArrowLeft} from 'lucide-react';

/**
 * PaymentCancelPage
 *
 * NOTE:
 * - Route registration is handled elsewhere.
 * - Intended to be used as PayHere `cancel_url`.
 */

export default function PaymentCancelPage() {
  const navigate = useNavigate();
//test
  // PayHere may append limited query params on cancel
  const search = useSearch({ strict: false }) as {
    order_id?: string;
    status_message?: string;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <XCircle className="h-16 w-16 text-red-500" />

          <h1 className="mt-4 text-2xl font-semibold text-gray-900">
            Payment Cancelled
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Your payment was cancelled. No charges were made.
          </p>
        </div>

        <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
          <InfoRow label="Order ID" value={search.order_id} />
          <InfoRow
            label="Status"
            value={search.status_message ?? 'User cancelled the payment'}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3">

          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          If this was a mistake, you can retry the payment anytime.
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value ?? '—'}</span>
    </div>
  );
}
