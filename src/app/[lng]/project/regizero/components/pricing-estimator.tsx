'use client';

import { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Plan {
  name: string;
  monthlyFee: string;
  commissionRate: string;
  recommendedFor: string;
}

interface PricingEstimatorProps {
  plans: Plan[];
}

function parseYen(text: string) {
  const digits = text.replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

function parsePercent(text: string) {
  const normalized = text.replace(/[^\d.]/g, '');
  const value = normalized ? Number(normalized) : 0;
  return Number.isFinite(value) ? value : 0;
}

function formatYen(value: number) {
  return new Intl.NumberFormat('ja-JP').format(Math.max(0, Math.round(value))) + '円';
}

function getRecommendedPlanName(monthlySales: number) {
  if (monthlySales < 1_000_000) return 'Free';
  if (monthlySales < 5_000_000) return 'Business';
  return 'Enterprise';
}

export function PricingEstimator({ plans }: PricingEstimatorProps) {
  const [monthlySales, setMonthlySales] = useState<number>(1_000_000);

  const recommendedPlanName = useMemo(() => getRecommendedPlanName(monthlySales), [monthlySales]);

  const estimates = useMemo(() => {
    return plans.map((plan) => {
      const monthlyFee = parseYen(plan.monthlyFee);
      const ratePercent = parsePercent(plan.commissionRate);
      const commission = monthlySales * (ratePercent / 100);
      const estimated = monthlyFee + commission;

      return {
        ...plan,
        monthlyFee,
        ratePercent,
        commission,
        estimated,
        isRecommended: plan.name === recommendedPlanName,
      };
    });
  }, [monthlySales, plans, recommendedPlanName]);

  return (
    <div className="rz-estimator-v2">
      <div className="rz-estimator-head">
        <div>
          <h3 className="rz-estimator-title">ROIシミュレーション</h3>
          <p className="rz-estimator-desc">想定される月商を入力し、最適なプランと予測コストをご確認ください。</p>
        </div>
      </div>

      <div className="rz-estimator-controls">
        <div className="rz-estimator-input-group">
          <TextField
            className="rz-estimator-input"
            type="number"
            value={monthlySales === 0 ? '' : monthlySales}
            onChange={(e) => setMonthlySales(Number(e.target.value || 0))}
            inputProps={{ min: 0, step: 50_000 }}
            sx={{ '& .MuiInputBase-input:focus-visible': { boxShadow: 'none' } }}
            InputProps={{ 
              startAdornment: <InputAdornment position="start">¥</InputAdornment>,
            }}
            variant="outlined"
            fullWidth
            placeholder="想定される月商を入力"
          />
          <div className="rz-estimator-chips">
            <button type="button" className={`rz-chip ${monthlySales === 500_000 ? 'active' : ''}`} onClick={() => setMonthlySales(500_000)}>50万円</button>
            <button type="button" className={`rz-chip ${monthlySales === 1_000_000 ? 'active' : ''}`} onClick={() => setMonthlySales(1_000_000)}>100万円</button>
            <button type="button" className={`rz-chip ${monthlySales === 3_000_000 ? 'active' : ''}`} onClick={() => setMonthlySales(3_000_000)}>300万円</button>
            <button type="button" className={`rz-chip ${monthlySales === 6_000_000 ? 'active' : ''}`} onClick={() => setMonthlySales(6_000_000)}>600万円</button>
          </div>
        </div>
      </div>

      <div className="rz-estimator-grid">
        {estimates.map((plan) => (
          <div key={plan.name} className={`rz-estimate-card ${plan.isRecommended ? 'is-recommended' : ''}`}>
            {plan.isRecommended && (
              <div className="rz-recommended-badge">
                <CheckCircleOutlineIcon /> 
                <span>Best Match</span>
              </div>
            )}
            <div className="rz-estimate-top">
              <span className="rz-estimate-name">{plan.name}</span>
            </div>
            
            <div className="rz-estimate-cost">
              <div className="rz-cost-value">
                <strong>{formatYen(plan.estimated)}</strong>
                <span>/ 月</span>
              </div>
            </div>

            <div className="rz-estimate-breakdown">
              <div className="rz-breakdown-row">
                <span>基本月額</span>
                <strong>{formatYen(plan.monthlyFee)}</strong>
              </div>
              <div className="rz-breakdown-row">
                <span>決済手数料 ({plan.commissionRate})</span>
                <strong>{formatYen(plan.commission)}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rz-estimator-footer">
        <p>※ 表示される金額はシミュレーションであり、実際の決済手数料やオプション費用は別途計算されます。</p>
      </div>
    </div>
  );
}
