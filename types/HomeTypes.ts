export interface iResponse {
  home: iHome;
  top_cuponse: iTopCuponse;
}
export interface iHome {
  page: iPage;
  data: iDataHome;
  main_header_links?: (iMainHeaderLinks)[] | null;
  tabaList: iTopCupones[];
}

export interface iHomeComponent {
  page: iPage;
  filter: string;
}

export interface iPage {
  title: string;
  subtitle: string;
  seo_title: string;
  seo_desc: string;
  content?: string | null;
}
export interface iDataHome {
  tabs: iTabs;
}
export interface iTabs {
  TopCupones?: (iTopCupones)[] | null;
  Tecnologia?: (iTecnologiaEntity)[] | null;
  Restaurantes?: (iRestaurantes)[] | null;
}
export interface iTopCupones {
  id: number;
  shop_id: number;
  start: string;
  end: string;
  hash: string;
  code?: string | null;
  title: string;
  preview: string;
  url?: string | null;
  description: string;
  exclusive: number;
  verified: number;
  created_at: string;
  updated_at: string;
  ordered?: number | null;
  type: number;
  status: number;
  status_label: string;
  formated_start: string;
  formated_end: string;
  shop: iShop;
  uses_count?: number | null;
}

export interface iImages {
  id: number;
  url: string;
  path: string;
  created_at: string;
  updated_at: string;
  pivot: iPivot;
}
export interface iPivot {
  shop_id: number;
  image_id: number;
  identifier: string;
}
export interface iTecnologiaEntity {
  id: number;
  shop_id: number;
  start: string;
  end: string;
  hash: string;
  code: string;
  title: string;
  preview: string;
  url?: string | null;
  description?: string | null;
  exclusive: number;
  verified: number;
  created_at: string;
  updated_at: string;
  ordered: number;
  type: number;
  status: number;
  status_label: string;
  formated_start: string;
  formated_end: string;
  shop: iShop;
}
export interface iRestaurantes {
  id: number;
  shop_id: number;
  start: string;
  end: string;
  hash: string;
  code: string;
  title: string;
  preview?: string | null;
  url?: string | null;
  description: string;
  exclusive: number;
  verified: number;
  created_at: string;
  updated_at: string;
  ordered: number;
  type: number;
  status: number;
  status_label: string;
  formated_start: string;
  formated_end: string;
  shop: iShop;
}
export interface iMainHeaderLinks {
  type: string;
  title: string;
  path: string;
}
export interface iTopCuponse {
  page: iPage;
  data: iTopData;
}
export interface iTopData {
  discounts?: (iDiscounts)[] | null;
  sidebar: iSidebar;
}
export interface iDiscounts {
  id: number;
  shop_id: number;
  start: string;
  end: string;
  hash: string;
  code?: string | null;
  title: string;
  preview: string;
  url?: string | null;
  description?: string | null;
  exclusive: number;
  verified: number;
  created_at: string;
  updated_at: string;
  ordered?: number | null;
  type: number;
  status: number;
  status_label: string;
  formated_start: string;
  formated_end: string;
  shop: iShop;
  uses_count?: number | null;
}
export interface iShop {
  id: number;
  name: string;
  slug: string;
  url: string;
  affiliate_url: string;
  content?: string | null;
  instructions?: string | null;
  secondary_content?: string | null;
  sidebar_content: string;
  seo_title: string;
  seo_desc: string;
  title: string;
  subtitle: string;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  background: string;
  created_at: string;
  updated_at: string;
  logo?: (iImages)[] | null;
  image?: (iImages)[] | null;
}
export interface iSidebar {
  shops?: (iShop)[] | null;
  discounts?: (iDiscounts)[] | null;
}