// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface SankakuAPIResponse {
	meta: any,
	data: SankakuPost[]
}

interface SankakuPost {
    id:                 number;
    rating:             Rating;
    status:             string;
    author:             Author;
    sample_url:         null | string;
    sample_width:       number;
    sample_height:      number;
    preview_url:        null | string;
    preview_width:      number | null;
    preview_height:     number | null;
    file_url:           null | string;
    width:              number;
    height:             number;
    file_size:          number;
    file_type:          string;
    created_at:         CreatedAt;
    has_children:       boolean;
    has_comments:       boolean;
    has_notes:          boolean;
    is_favorited:       boolean;
    user_vote:          null;
    md5:                string;
    parent_id:          number | null;
    change:             number;
    fav_count:          number;
    recommended_posts:  number;
    recommended_score:  number;
    vote_count:         number;
    total_score:        number;
    comment_count:      null;
    source:             null | string;
    in_visible_pool:    boolean;
    is_premium:         boolean;
    is_rating_locked:   boolean;
    redirect_to_signup: boolean;
    sequence:           null;
    tags:               Tag[];
}

interface Author {
    id:            number;
    name:          string;
    avatar:        string;
    avatar_rating: Rating;
}

enum Rating {
    Explicit = "e",
    Questionable = "q",
    Safe = "s",
}

interface CreatedAt {
    json_class: "Time";
    s:          number;
    n:          number;
}

interface Tag {
    id:         number;
    name_en:    string;
    name_ja:    null | string;
    type:       number;
    count:      number;
    post_count: number;
    pool_count: number;
    locale:     string;
    rating:     Rating | null;
    name:       string;
}