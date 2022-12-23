import { SupabaseClient } from "@supabase/supabase-js";

export default async function signIn(supabaseClient: SupabaseClient<any, "public", any>) {
    const { error } = await supabaseClient.auth.signInWithOAuth({ provider: "google" });
    if (error) console.log(error);
}