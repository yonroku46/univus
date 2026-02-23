import { Dayjs } from 'dayjs';

declare global {
  // Base
  interface ApiResponse {
    resultCode: number;
    hasErrors: boolean;
    informations: Array<any>;
    errors: Array<any>;
    responseData: any;
  }
  interface ActionRes {
    success: boolean;
    id?: string;
  }
  interface ListRes<T> {
    list: Array<T>
  }
  interface CountRes {
    count: number
  }
  interface MenuItem {
    groupName: string;
    groupHref: string;
    unit: Array<{ name: string, href: string }>;
  }
  interface Notice {
    id: number;
    title: string;
    content: string;
    date: string;
    isNew: boolean;
    type: 'service' | 'info';
  }
  interface Position {
    id: string;
    category: string;
    limit: string;
    title: string;
    employmentType: string;
    tags: string[];
    location: string;
    description: string;
  }
  interface Filter {
    category: string;
    employmentType: string;
  }
  interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bgColor: string;
    href: string;
  }
  interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
  }
}

export {};