'use client';

import React, { useState, use } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { AvailableLanguages } from '@/i18n/settings';
import * as gtag from '@/common/utils/gtag';
import '@/styles/pages/contact.scss';

interface ContactPageProps {
  params: Promise<{ lng: AvailableLanguages }>;
}

interface FormState {
  type: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  meetingPreference: string;
  message: string;
}

const initialForm: FormState = {
  type: '【Web開発】新規システム・サービス開発',
  company: '',
  name: '',
  email: '',
  phone: '',
  meetingPreference: '',
  message: '',
};

const breadcrumbs: Breadcrumb[] = [
  { label: '問い合わせ', href: '/contact', active: true },
];

export default function ContactPage({ params }: ContactPageProps) {
  const { lng } = use(params);

  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formattedMessage = form.meetingPreference.trim()
      ? `${form.message}\n\n【お打ち合わせ希望日時】\n${form.meetingPreference.trim()}`
      : form.message;

    const payload = {
      type: form.type,
      company: form.company.trim() || '個人 / 記載なし',
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || '（記載なし）',
      message: formattedMessage,
    };

    try {
      const response = await fetch(
        'https://bdt95sp7b3.execute-api.ap-northeast-1.amazonaws.com/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        setForm(initialForm);

        gtag.event('generate_lead', {
          event_category: 'contact',
          event_label: form.type,
        });
        gtag.reportAdsConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL);
      } else {
        setErrorMessage('送信中にエラーが発生しました。お手数ですが時間をおいて再度お試しください。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setErrorMessage('通信エラーが発生しました。インターネット環境をご確認ください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="bg-sub">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="container center content-top">
        <div className="contact-section">
          <div className="contact-header">
            <h1 className="contact-title">問い合わせ</h1>
            <p className="contact-subtitle">
              ご不明な点やWeb開発・DXのご相談など、いつでもお気軽にお問い合わせください
            </p>
          </div>

          {showSuccess ? (
            <div className="success-box">
              <h2 className="success-title">お問い合わせを受け付けました</h2>
              <p className="success-desc">
                ご連絡いただき誠にありがとうございます。<br />
                内容を確認の上、通常2営業日以内に担当者より折り返しご連絡いたします。
              </p>
            </div>
          ) : (
            <div className="contact-card">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Inquiry Type (Select) */}
                <div className="form-group">
                  <div className="field-label-row">
                    <label htmlFor="type">お問い合わせ・ご相談項目</label>
                    <span className="req-badge">必須</span>
                  </div>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <optgroup label="Web開発・DX伴走支援のご相談">
                      <option value="【Web開発】新規システム・サービス開発">
                        新規Webシステム・サービス開発
                      </option>
                      <option value="【DX支援】社内業務DX・自動化ツール開発">
                        社内業務DX・業務自動化ツール開発
                      </option>
                      <option value="【アプリ開発】Web・モバイルアプリ開発">
                        Web・モバイルアプリ開発
                      </option>
                      <option value="【伴走支援】IT内製化・開発パートナー相談">
                        IT内製化・開発伴走パートナー相談
                      </option>
                      <option value="【改修・保守】既存システムの改修・リニューアル">
                        既存システムの改修・リニューアル
                      </option>
                      <option value="【構想相談】仕様策定前の壁打ち・初期相談">
                        仕様策定前の壁打ち・初期相談
                      </option>
                    </optgroup>
                    <optgroup label="一般的なお問い合わせ">
                      <option value="【提携】業務提携・協業のご提案">
                        業務提携・協業のご提案
                      </option>
                      <option value="【採用】採用情報について">
                        採用情報について
                      </option>
                      <option value="【その他】その他のお問い合わせ">
                        その他のお問い合わせ
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <div className="field-label-row">
                    <label htmlFor="company">会社名・組織名</label>
                    <span className="opt-badge">任意</span>
                  </div>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleInputChange}
                    placeholder="例：株式会社〇〇（個人の場合は空欄で構いません）"
                    className="form-input"
                  />
                </div>

                {/* Name & Email */}
                <div className="form-row-half">
                  <div className="form-group">
                    <div className="field-label-row">
                      <label htmlFor="name">ご担当者様 氏名</label>
                      <span className="req-badge">必須</span>
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      placeholder="例：山田 太郎"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <div className="field-label-row">
                      <label htmlFor="email">メールアドレス</label>
                      <span className="req-badge">必須</span>
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      placeholder="例：yamada@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <div className="field-label-row">
                    <label htmlFor="phone">お電話番号</label>
                    <span className="opt-badge">任意</span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="例：092-000-0000"
                    className="form-input"
                  />
                </div>

                {/* Meeting Preference */}
                <div className="form-group">
                  <div className="field-label-row">
                    <label htmlFor="meetingPreference">お打ち合わせ・面談のご希望日時</label>
                    <span className="opt-badge">任意</span>
                  </div>
                  <input
                    id="meetingPreference"
                    type="text"
                    name="meetingPreference"
                    value={form.meetingPreference}
                    onChange={handleInputChange}
                    placeholder="例：平日14:00〜18:00、来週の火曜日午後、オンライン面談希望など"
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <div className="field-label-row">
                    <label htmlFor="message">詳細内容</label>
                    <span className="req-badge">必須</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    placeholder="お問い合わせ内容やご相談の概要をご記入ください。（Web開発相談の場合、仕様書がない構想段階でもお気軽にご相談ください）"
                    className="form-textarea"
                  />
                </div>

                {errorMessage && <p className="error-alert">{errorMessage}</p>}

                {/* Submit */}
                <div className="form-submit-row">
                  <p className="privacy-text">
                    ご入力いただいた情報は、お問い合わせ対応およびご連絡の目的にのみ利用いたします。
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-submit"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}